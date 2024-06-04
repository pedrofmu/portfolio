#!/bin/bash

# Configuracion de parametros
DISK='/dev/sda'
EFI_PARTITION='/dev/sda1'
ROOT_PARTITION='/dev/sda2'
HOSTNAME='archlinux'
USERNAME='user'
PASSWORD='1234'
ROOT_PASSWORD='1234'

# Montar particiones
mount ${ROOT_PARTITION} /mnt
mkdir /mnt/boot
mount ${EFI_PARTITION} /mnt/boot

# Comprobar si las particiones están montadas correctamente
if mountpoint -q /mnt && mountpoint -q /mnt/boot; then
    echo "Las particiones están montadas correctamente."
else
    echo "Error: Las particiones no están montadas correctamente."
    exit 1
fi

# Instalar paquetes base
pacstrap /mnt base linux linux-firmware

# Generar fstab
genfstab -U /mnt >> /mnt/etc/fstab

echo "----------------------------------------------ACABADO MONTAR PARTICIONES Y CREAR FSTAB-----------------------------------------------"

# Configurar el sistema
arch-chroot /mnt ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime
arch-chroot /mnt hwclock --systohc
echo "es_ES.UTF-8 UTF-8" | arch-chroot /mnt tee /etc/locale.gen
echo "KEYMAP=es" > /mnt/etc/vconsole.conf
arch-chroot /mnt locale-gen
echo "${HOSTNAME}" > /mnt/etc/hostname
echo "127.0.1.1   ${HOSTNAME}.localdomain  ${HOSTNAME}" >> /mnt/etc/hosts

echo "----------------------------------------------CONFIGURADO LOCALES-----------------------------------------------"

# Update pacman repositories
arch-chroot /mnt pacman --noconfirm -Syu

# Instalar y configurar GRUB
arch-chroot /mnt pacman --noconfirm -S grub efibootmgr
arch-chroot /mnt grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB 
arch-chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

echo "----------------------------------------------CREADO CONFIGURACION DE GRUB-----------------------------------------------"

# Instalar paquetes adicionales
arch-chroot /mnt pacman -S --noconfirm sudo nano xorg plasma kde-applications sddm networkmanager

echo "----------------------------------------------INSTALADAS APPS PRIMORDIALES (DE SUDO NANO NETWORKMANAGER)-----------------------------------------------"

# Configurar contraseña de root
echo "root:${ROOT_PASSWORD}" | arch-chroot /mnt chpasswd

# Añadir sudo 
arch-chroot /mnt groupadd sudo
echo "%sudo ALL=(ALL) ALL" >> /mnt/etc/sudoers

# Crear usuario principal
arch-chroot /mnt useradd -m -G sudo -s /bin/bash ${USERNAME}
echo "${USERNAME}:${PASSWORD}" | arch-chroot /mnt chpasswd

# Crear usuarios adicionales
for usr in oscar-s pedro-a pedro-f jose-carlos; do
    arch-chroot /mnt useradd -m -G sudo -s /bin/bash ${usr}
    echo "${usr}:${PASSWORD}" | arch-chroot /mnt chpasswd
done

# Crear usuario invitado
arch-chroot /mnt useradd -m -s /bin/bash invitado-grp-1

echo "----------------------------------------------CREADOS USUARIOS-----------------------------------------------"

# Activar servicios
arch-chroot /mnt systemctl enable sddm.service
arch-chroot /mnt systemctl enable NetworkManager.service

echo "--------------------SERVICIOS PRINIPALES CONFIGURADOS-----------------------"

arch-chroot /mnt pacman -S --noconfirm firefox gimp libreoffice-still obs-studio vlc 

echo "--------------INSTALADA LA MORRALLA---------------"

# arch-chroot /mnt pacman -S --noconfirm --needed git base-devel
# arch-chroot /mnt mkdir /install/yay
# arch-chroot /mnt git clone https://aur.archlinux.org/yay.git /install/yay
# arch-chroot /mnt cd /install/yay && makepkg -si
# arch-chroot /mnt yay -S --noconfirm autofirma calibre keepassxc-git  

# Desmontar y reiniciar
sync
umount -R /mnt

echo "------------------------REINICIA Y REZA UN PADRE NUESTRO-------------"

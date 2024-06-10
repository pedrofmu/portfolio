# Define la lista de usuarios, contraseñas y grupos
$usuarios = @(
    @{Nombre = "usuario1"; Contraseña = "contraseña1"; Grupo = "Users"},
    @{Nombre = "usuario2"; Contraseña = "contraseña2"; Grupo = "Administrators"},
    @{Nombre = "usuario3"; Contraseña = "contraseña3"; Grupo = "Remote Desktop Users"},
    @{Nombre = "usuario4"; Contraseña = "contraseña4"; Grupo = "MiNuevoGrupo"}
)

foreach ($usuario in $usuarios) {
    $nombreUsuario = $usuario.Nombre
    $contraseña = $usuario.Contraseña
    $grupo = $usuario.Grupo

    # Crear el grupo si no existe
    if (-not (Get-LocalGroup -Name $grupo -ErrorAction SilentlyContinue)) {
        Write-Host "El grupo '$grupo' no existe. Creando grupo..."
        New-LocalGroup -Name $grupo -Description "Grupo creado automáticamente"
    }

    # Crear el usuario
    if (-not (Get-LocalUser -Name $nombreUsuario -ErrorAction SilentlyContinue)) {
        New-LocalUser -Name $nombreUsuario -Password (ConvertTo-SecureString $contraseña -AsPlainText -Force) -FullName $nombreUsuario -Description "Usuario creado automáticamente"
        Write-Host "Usuario '$nombreUsuario' creado exitosamente."
    } else {
        Write-Host "El usuario '$nombreUsuario' ya existe. Omitiendo creación."
    }

    # Agregar el usuario al grupo especificado
    Add-LocalGroupMember -Group $grupo -Member $nombreUsuario
    Write-Host "Usuario '$nombreUsuario' añadido al grupo '$grupo'."
}

Write-Host "Proceso completado."

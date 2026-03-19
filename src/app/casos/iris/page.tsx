import Image from "next/image";
import Link from "next/link";

export default function IrisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
        <Link
          href="/#casos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a casos de éxito
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <header className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Iris</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Iris helps labs send files to SoloDB safely and consistently. It takes uploads from lab systems, keeps them in a temporary holding area, and lets a workstation confirm what should be stored.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Iris middleware for uploads from a lab client to SoloDB with a solodb-workstation or other client as intermediary.
              The lab initiates uploads and sends file data. Iris stores the data temporarily, streams
              upload events over SSE to the workstation, and uploads approved files to SoloDB.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The flow, entity fields, and state transitions are illustrated below.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <Image
                src="/assets/iris-docs/diagram.png"
                alt="Iris flow diagram"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API</h2>
            <p className="text-gray-600 italic">[CENSORED]</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Entities</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">FileUploadEvent</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">uid</code>: string identifier for the event.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">state</code>: enum state for the event lifecycle.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">content</code>: map of <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">filename</code> to <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">data</code> (data points to a path).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">start</code>: timestamp when the upload started.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">completedState</code>: string for logging purposes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">TTL</code>: uint seconds before the event is automatically rejected.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-700">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">autoApprove</code>: boolean to automatically approve uploads to SoloDB.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">State (FSM)</h2>
            <p className="text-gray-700 mb-4">
              <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">FileUploadEvent</code> follows this finite state machine:
            </p>
            <ul className="space-y-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">started</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">START_UPLOAD</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">started</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">REJECT</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">rejected</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">started</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">FAIL</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">error</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">FINISH_UPLOAD</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">awaiting_approval</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">REJECT</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">rejected</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">START_UPLOAD</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">uploading</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">FAIL</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">error</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">awaiting_approval</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">APPROVE</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">syncing</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">awaiting_approval</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">REJECT</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">rejected</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">awaiting_approval</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">FAIL</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">error</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">syncing</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">SUCCESS</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">completed</code>
              </li>
              <li className="font-mono text-sm text-gray-800">
                <code className="bg-white px-2 py-0.5 rounded text-blue-600">syncing</code> --<code className="bg-white px-2 py-0.5 rounded text-purple-600">FAIL</code>--&gt; <code className="bg-white px-2 py-0.5 rounded text-blue-600">error</code>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flow</h2>
            <ol className="space-y-3">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                <span className="text-gray-700 pt-1">The lab starts an upload and Iris returns a <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-900">FileUploadEvent</code> UID.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                <span className="text-gray-700 pt-1">The lab uploads file data and Iris stores it temporarily.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                <span className="text-gray-700 pt-1">Iris streams upload events and the workstation listens for updates.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                <span className="text-gray-700 pt-1">Iris indicates that data is being uploaded and the workstation checks the event status.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">5</span>
                <span className="text-gray-700 pt-1">The workstation approves the event.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">6</span>
                <span className="text-gray-700 pt-1">Iris uploads the file to SoloDB and storage completes.</span>
              </li>
            </ol>
          </section>
        </article>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Security Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate API key rotation<br />
          <span className="text-[#58a6ff]">with zero downtime</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Schedule API key rotations across all your services. New keys are validated before activation and rolled back automatically on failure — no manual work, no outages.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $79/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">&#x1F501;</div>
            <h3 className="font-semibold text-white mb-1">Scheduled Rotations</h3>
            <p className="text-sm text-[#8b949e]">Set rotation intervals per service. The scheduler handles timing automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">&#x2705;</div>
            <h3 className="font-semibold text-white mb-1">Pre-Switch Validation</h3>
            <p className="text-sm text-[#8b949e]">New keys are tested against live endpoints before the old key is retired.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">&#x23EA;</div>
            <h3 className="font-semibold text-white mb-1">Auto Rollback</h3>
            <p className="text-sm text-[#8b949e]">If validation fails, the previous key stays active and your team is alerted instantly.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$79<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate secret rotation</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited API key rotations',
              'Multi-service coordination',
              'Pre-switch key validation',
              'Automatic rollback on failure',
              'Slack & email alerts',
              'Audit log & rotation history',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#x2713;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which services are supported?</h3>
            <p className="text-[#8b949e] text-sm">Any service with an API key — AWS, Stripe, GitHub, Twilio, SendGrid, and custom HTTP endpoints. You define the rotation and validation logic per service.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does zero-downtime rotation work?</h3>
            <p className="text-[#8b949e] text-sm">A new key is generated and validated against your service before the old key is deactivated. If validation fails, the old key remains active and no downtime occurs.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data secure?</h3>
            <p className="text-[#8b949e] text-sm">Keys are encrypted at rest and in transit. We never store plaintext secrets. You can also self-host the scheduler in your own infrastructure.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} API Secret Rotation Scheduler. All rights reserved.
      </footer>
    </main>
  )
}

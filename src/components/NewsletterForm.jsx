import { useEffect } from 'react'

const FORM_ACTION = 'https://app.kit.com/forms/10137539/subscriptions'
const FORM_UID = '432559da3d'

const successMessage =
  'Success! Now check your email to confirm your subscription.'

export default function NewsletterForm({ className = '' }) {
  useEffect(() => {
    if (document.querySelector('script[data-convertkit]')) return
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    script.dataset.convertkit = 'true'
    document.body.appendChild(script)
  }, [])

  return (
    <form
      action={FORM_ACTION}
      method="post"
      className={`seva-form formkit-form mx-auto ${className}`}
      data-sv-form="10137539"
      data-uid={FORM_UID}
      data-format="inline"
      data-version="5"
      data-options={JSON.stringify({
        settings: {
          after_subscribe: {
            action: 'message',
            success_message: successMessage,
            redirect_url: '',
          },
        },
        version: '5',
      })}
    >
      <ul
        className="formkit-alert formkit-alert-error mb-3 hidden text-sm text-plum empty:hidden"
        data-element="errors"
        data-group="alert"
      />
      <div
        data-element="fields"
        data-stacked="false"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          className="formkit-input w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-clay/40"
          name="email_address"
          aria-label="Email Address"
          placeholder="you@email.com"
          required
          type="email"
        />
        <button
          data-element="submit"
          type="submit"
          className="formkit-submit inline-block flex-none rounded-full bg-amber px-7 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/30"
        >
          <span>Sign Up</span>
        </button>
      </div>
    </form>
  )
}

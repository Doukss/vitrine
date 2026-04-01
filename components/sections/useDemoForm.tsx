'use client'

import { useState } from 'react'

export type FormData = {
  name: string
  email: string
  organization: string
  size: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const INITIAL: FormData = {
  name: '',
  email: '',
  organization: '',
  size: '',
  message: '',
}

export function useDemoForm() {
  const [data, setData] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setErrorMsg(json.error || 'Une erreur est survenue.')
        setStatus('error')
        return
      }

      setStatus('success')
      setData(INITIAL)
    } catch {
      setErrorMsg('Impossible de joindre le serveur. Vérifiez votre connexion.')
      setStatus('error')
    }
  }

  return { data, set, status, errorMsg, submit }
}
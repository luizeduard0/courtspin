import { clearLocalStorage } from "@/utils/local-storage.service"
import Router from "next/router"
import { useEffect } from "react"

export default function LogoutPage() {
  useEffect(() => {
    clearLocalStorage()
    Router.push('/auth')
  }, [])

  return <></>
}
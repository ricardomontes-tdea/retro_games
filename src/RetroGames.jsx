import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const RetroGames = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </>
  )
}

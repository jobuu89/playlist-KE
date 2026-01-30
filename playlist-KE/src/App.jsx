import { Routes, Route } from 'react-router-dom'
import { MusicProvider } from './context/MusicContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import routes from './config/routes'

function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <PlayerProvider>
          <Routes>
            {routes.map(({ path, component: Component, exact }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
                exact={exact}
              />
            ))}
          </Routes>
        </PlayerProvider>
      </MusicProvider>
    </ThemeProvider>
  )
}

export default App

import App from './app'

const Main = async () => {
  const Application = new App()

  await Application.Listen()
}

Main()

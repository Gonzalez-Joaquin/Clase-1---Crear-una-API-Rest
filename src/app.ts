import express, { Application } from 'express'

import pingRoute from './Routes/ping.routes'

class App {
  private App: Application

  constructor(private PORT?: number | string) {
    this.App = express()
    this.Settings()
    this.Routes()
  }

  Settings() {
    this.App.set('port', this.PORT || process.env.PORT || 5000)
  }

  Routes() {
    this.App.use('/ping', pingRoute)
  }

  async Listen() {
    await this.App.listen(this.App.get('port'))
    console.log('Server running in Port', this.App.get('port'))
  }
}

export default App

import express, { Application } from 'express'

class App {
  private App: Application

  constructor(private PORT?: number | string) {
    this.App = express()
    this.Settings()
  }

  Settings() {
    this.App.set('port', this.PORT || process.env.PORT || 5000)
  }

  async Listen() {
    await this.App.listen(this.App.get('port'))
    console.log('Server running in Port', this.App.get('port'))
  }
}

export default App

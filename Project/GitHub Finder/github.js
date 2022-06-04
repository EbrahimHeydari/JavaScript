class Github {
  constructor() {
    this.client_id = 'afd9474f951fa2ccc2e3'
    this.client_secret = '8b7d4b51ecd63e667a871155a2742677d2061e5d'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  getUser = async user => {
    const baseUrl = 'https://api.github.com/users/'

    const profileResponse = await fetch(`${baseUrl}${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repoResponse = await fetch(`${baseUrl}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}
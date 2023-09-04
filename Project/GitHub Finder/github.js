class Github {
	constructor() {
		this.client_id = 'd9308aacf8b204d361fd'
		this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b'
		this.repos_count = 5
		this.repos_sort = 'created: asc'
	}

	getUser = async user => {
		const baseUrl = 'https://api.github.com/users/'

		const profileParams = new URLSearchParams({
			client_id: this.client_id,
			client_secret: this.client_secret,
		})

		const repoParams = new URLSearchParams({
			per_page: this.repos_count,
			sort: this.repos_sort,
			client_id: this.client_id,
			client_secret: this.client_secret,
		})

		const profileResponse = await fetch(`${baseUrl}${user}?${profileParams}`)
		const repoResponse = await fetch(`${baseUrl}${user}/repos?${repoParams}`)

		const profile = await profileResponse.json()
		const repos = await repoResponse.json()

		return {
			profile,
			repos,
		}
	}
}

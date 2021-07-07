class GitHub {
    constructor() {
        this.client_id = `956d43984eb520806a2d`; //adding client id and client secret as a property using "this"
        this.client_secret = `7e15f805e8e472610c496120d9deb21257196c6d`;
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`
        );
        //as you need to add the client credentials along with the fetching the user data.
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page = ${this.repos_count}&sort = ${this.repos_sort}&client_id = ${this.client_id}&client_secret = ${this.client_secret}`
        );
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profile,
            repos: repos,
        };
    }
}

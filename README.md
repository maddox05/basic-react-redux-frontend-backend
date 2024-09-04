
<p align="center">
    <h1 align="center">BASIC-REACT-REDUX-FRONTEND-BACKEND</h1>
</p>
<p align="center">
    <em><code>❯ maddox05</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/maddox05/basic-react-redux-frontend-backend?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/maddox05/basic-react-redux-frontend-backend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/maddox05/basic-react-redux-frontend-backend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/maddox05/basic-react-redux-frontend-backend?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=Redux&logoColor=white" alt="Redux">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
    - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>❯ A simple frontend backend with redux thunk express js, mssql </code>

---

##  Features

<code>❯ simple server / sql connection / redux thunks </code>

---

##  Repository Structure

```sh
└── basic-react-redux-frontend-backend/
    ├── backend
    │   ├── .gitignore
    │   ├── config
    │   │   └── config.js
    │   ├── database
    │   │   └── dbFunctions.js
    │   ├── helpers
    │   │   ├── dateFunctions.js
    │   │   ├── fileFunctions.js
    │   │   └── utils.js
    │   ├── models
    │   │   └── books
    │   │       └── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── routes
    │   │   ├── books
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   ├── random
    │   │   │   └── index.js
    │   │   └── routerUtils.js
    │   └── server.js
    └── frontend
        ├── .gitignore
        ├── .prettierrc.json
        ├── .vscode
        │   └── settings.json
        ├── Notes.md
        ├── README.md
        ├── jsconfig.json
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── index.html
        │   └── manifest.json
        ├── src
        │   ├── api.js
        │   ├── app
        │   │   ├── main
        │   │   │   ├── App.js
        │   │   │   ├── actions.js
        │   │   │   ├── components
        │   │   │   └── reducers.js
        │   │   ├── sharedComponents
        │   │   │   └── FlashMessage
        │   │   └── store
        │   │       ├── actionTypes.js
        │   │       ├── index.js
        │   │       └── reducers.js
        │   └── index.js
        └── todo.md
```

---

##  Modules

<details closed><summary>backend</summary>

| File | Summary |
| --- | --- |
| [server.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/server.js) | <code>❯ REPLACE-ME</code> |
| [package.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/package.json) | <code>❯ REPLACE-ME</code> |
| [package-lock.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/package-lock.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.helpers</summary>

| File | Summary |
| --- | --- |
| [utils.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/helpers/utils.js) | <code>❯ REPLACE-ME</code> |
| [dateFunctions.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/helpers/dateFunctions.js) | <code>❯ REPLACE-ME</code> |
| [fileFunctions.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/helpers/fileFunctions.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.database</summary>

| File | Summary |
| --- | --- |
| [dbFunctions.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/database/dbFunctions.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.models.books</summary>

| File | Summary |
| --- | --- |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/models/books/index.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.routes</summary>

| File | Summary |
| --- | --- |
| [routerUtils.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/routes/routerUtils.js) | <code>❯ REPLACE-ME</code> |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/routes/index.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.routes.books</summary>

| File | Summary |
| --- | --- |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/routes/books/index.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.routes.random</summary>

| File | Summary |
| --- | --- |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/routes/random/index.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>backend.config</summary>

| File | Summary |
| --- | --- |
| [config.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/backend/config/config.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend</summary>

| File | Summary |
| --- | --- |
| [jsconfig.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/jsconfig.json) | <code>❯ REPLACE-ME</code> |
| [package.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/package.json) | <code>❯ REPLACE-ME</code> |
| [.prettierrc.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/.prettierrc.json) | <code>❯ REPLACE-ME</code> |
| [package-lock.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/package-lock.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.public</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/public/index.html) | <code>❯ REPLACE-ME</code> |
| [manifest.json](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/public/manifest.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.src</summary>

| File | Summary |
| --- | --- |
| [api.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/api.js) | <code>❯ REPLACE-ME</code> |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/index.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.src.app.main</summary>

| File | Summary |
| --- | --- |
| [App.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/App.js) | <code>❯ REPLACE-ME</code> |
| [actions.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/actions.js) | <code>❯ REPLACE-ME</code> |
| [reducers.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/reducers.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.src.app.main.components</summary>

| File | Summary |
| --- | --- |
| [BookCreate.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/components/BookCreate.js) | <code>❯ REPLACE-ME</code> |
| [BookShow.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/components/BookShow.js) | <code>❯ REPLACE-ME</code> |
| [BookList.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/components/BookList.js) | <code>❯ REPLACE-ME</code> |
| [BookEdit.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/main/components/BookEdit.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.src.app.sharedComponents.FlashMessage</summary>

| File | Summary |
| --- | --- |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/sharedComponents/FlashMessage/index.js) | <code>❯ REPLACE-ME</code> |
| [actions.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/sharedComponents/FlashMessage/actions.js) | <code>❯ REPLACE-ME</code> |
| [reducers.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/sharedComponents/FlashMessage/reducers.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>frontend.src.app.store</summary>

| File | Summary |
| --- | --- |
| [actionTypes.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/store/actionTypes.js) | <code>❯ REPLACE-ME</code> |
| [index.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/store/index.js) | <code>❯ REPLACE-ME</code> |
| [reducers.js](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/frontend/src/app/store/reducers.js) | <code>❯ REPLACE-ME</code> |

</details>

---

##  Getting Started

###  Installation

Build the project from source:

1. Clone the basic-react-redux-frontend-backend repository:
```sh
❯ git clone https://github.com/maddox05/basic-react-redux-frontend-backend
```

2. Navigate to the project directory:
```sh
❯ cd basic-react-redux-frontend-backend
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/maddox05/basic-react-redux-frontend-backend/issues)**: Submit bugs found or log feature requests for the `basic-react-redux-frontend-backend` project.
- **[Submit Pull Requests](https://github.com/maddox05/basic-react-redux-frontend-backend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/maddox05/basic-react-redux-frontend-backend/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/maddox05/basic-react-redux-frontend-backend
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/maddox05/basic-react-redux-frontend-backend/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=maddox05/basic-react-redux-frontend-backend">
   </a>
</p>
</details>

---

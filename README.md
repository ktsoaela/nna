# Portfolio Project

This is a portfolio project showcasing my skills, projects, and experience. It serves as a professional portfolio website to showcase my work and provide information about me.

## Features

- **About Me:** Provides an introduction and overview of my background, skills, and expertise.
- **Projects:** Highlights the projects I have worked on, including descriptions, screenshots, and links to live demos or GitHub repositories.
- **Skills:** Lists the technical skills I possess, such as programming languages, frameworks, tools, and technologies.
- **Experience:** Provides information about my professional experience, including work history, roles, and responsibilities.
- **Contact:** Offers a way for visitors to get in touch with me, such as through a contact form or email.

## Technologies Used

- **Angular**: The project is built using the Angular framework, which provides a robust structure for developing web applications.
- **HTML/CSS**: The website utilizes HTML for the markup and CSS for styling and layout.
- **Bootstrap**: Bootstrap is used for responsive design and pre-built UI components to enhance the website's aesthetics.
- **TypeScript**: The code is written in TypeScript, a statically typed superset of JavaScript that adds additional features and type checking.
- **Git**: Git is used for version control, allowing easy collaboration and tracking of changes throughout the development process.
- **Docker**: Docker is used to containerize the project for easy deployment and reproducibility.

## Getting Started

To run the portfolio project locally, follow these steps:

1. **Clone the repository**: Start by cloning this repository to your local machine using the following command:

2. **Build the Docker image**: Navigate to the project directory and build the Docker image using the following command:

docker build -t portfolio .

This command builds the Docker image with the tag "portfolio" based on the Dockerfile.

3. **Run the Docker container**: After the Docker image is built, run a container based on the image with the following command:

docker run -p 8080:80 portfolio

This command maps port 8080 on your local machine to port 80 inside the Docker container, allowing you to access the portfolio project in your browser at `http://localhost:8080`.

4. **Access the website**: Open a web browser and visit `http://localhost:8080` to view the portfolio project.


## Contributing

Contributions to the project are welcome! If you find any bugs, have suggestions, or would like to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).




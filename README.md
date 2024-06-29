https://github.com/ManishjangirIITG/pathfindingalgovisualizer/assets/121192543/464c92f6-a51c-401a-a6c0-cbdc36eae6f6
# Pathfinding Visualizer

## Project Description

The Pathfinding Visualizer is a web application that allows users to visualize various pathfinding algorithms in action. The current implementation focuses on Dijkstra's Algorithm, a popular algorithm used for finding the shortest path between nodes in a graph. Users can interact with the grid to set start and finish nodes, add walls, and run the algorithm to see how the path is computed.

## Features

- **Interactive Grid**: Click and drag to place walls on the grid.
- **Start and Finish Nodes**: Set start and finish nodes by clicking and dragging them.
- **Pathfinding Visualization**: Visualize Dijkstra's Algorithm with animations.
- **Clear Path**: Clear the grid and start fresh.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for layout and animations.
- **Material-UI**: React components for the navigation bar.
- **JavaScript**: For implementing the pathfinding algorithm and interactive features.

## Installation

To run the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/pathfinding-visualizer.git

2. Navigate to the Project Directory:

   ```bash
   cd pathfinding-visualizer

3. Install Dependencies and Run the Application:

    ```bash
    npm install
    npm start

This will start the development server and open the application in your default web browser. The application will be available at `http://localhost:3000`.

## Usage

1. Interacting with the Grid:
- Click and drag on the grid to place walls.
- Click and drag to move the start and finish nodes.
- Press the "Visualize Dijkstra's Algorithm" button to start the pathfinding visualization.
- Press the "Clear Path" button to reset the grid.

2. Understanding the Visualization:
- **Start Node**: Highlighted in yellow.
- **Finish Node**: Highlighted in red.
- **Visited Nodes**: Animated with a color change to indicate the nodes that have been visited by the algorithm.
- **Shortest Path**: Highlighted with a different animation to show the final path from start to finish.

## Acknowledgements
- React and Material-UI for providing the foundational tools and components used in this project.
- Dijkstra's Algorithm for its role in pathfinding and graph theory.

For any questions or additional information, feel free to reach out via the Issues page or email me directly.


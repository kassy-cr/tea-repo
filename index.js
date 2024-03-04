// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
      throw new Error("Radius must be a positive number");
    }
  
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Helper function to calculate the perimeter of a rectangle
  function calculateRectanglePerimeter(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      throw new Error("Length and width must be positive numbers");
    }
  
    return 2 * (length + width);
  }
  
  // Demo using the helper functions
  try {
    const circleRadius = 5;
    const circleArea = calculateCircleArea(circleRadius);
    console.log(`Area of Circle with radius ${circleRadius}:`, circleArea.toFixed(2));
  
    const rectangleLength = 8;
    const rectangleWidth = 6;
    const rectanglePerimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
    console.log(`Perimeter of Rectangle with length ${rectangleLength} and width ${rectangleWidth}:`, rectanglePer
  
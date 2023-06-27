export function handleDownload() {
  // Create a temporary element
  const element = document.createElement("a");
  // Set the href attribute to the file URL you want to download
  element.href = "../../../src/assets/Resume of Md Solaiman.pdf";
  // Set the download attribute with the desired file name
  element.download = "Resume of Md Solaiman.pdf";
  // Hide the element
  element.style.display = "none";
  // Append the element to the document
  document.body.appendChild(element);
  // Simulate a click event to trigger the download
  element.click();
  // Remove the element from the document
  document.body.removeChild(element);
}

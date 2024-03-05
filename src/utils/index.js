function createDOMElement({
  elementType,
  attributes = {},
  parentElement,
  innerHTML,
  onclick,
}) {
  const element = document.createElement(elementType);

  // Set attributes for the new element
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  // Set inner HTML content if provided
  if (innerHTML !== undefined) {
    element.innerHTML = innerHTML;
  }

  // Set onclick handler if provided
  if (onclick !== undefined && onclick !== null) {
    element.onclick = onclick;
  }

  // Append the new element to the specified parent element
  if (parentElement && parentElement instanceof Element) {
    parentElement.appendChild(element);
  }

  return element;
}

function handleTabClick(activeTabContentId, tabContentClass) {
  // Hide all tab contents
  const allTabContents = document.querySelectorAll(`.${tabContentClass}`);
  console.log("allTabContents", allTabContents);
  allTabContents.forEach(function (tabContent) {
    tabContent.classList.remove("active");
  });

  // Show the selected tab content
  const activeTabContent = document.getElementById(activeTabContentId);
  if (activeTabContent) {
    activeTabContent.classList.add("active");
  }
}
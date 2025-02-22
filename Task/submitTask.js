// Function to switch between tabs
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
    activeTab.classList.add('active');
}

// Function to submit the form data to the specified Power Automate Cloud Flow URL
function submitForm() {
    const form = document.getElementById('dataRequestForm');
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    data['Priority'] = parseInt(data['Priority']);
    data['TaskCategory'] = parseInt(data['TaskCategory']);

    var jsonObj = {
        "FullName": "John Doe",
        "EmailAddress": "john.doe@example.com",
        "PhoneNumber": "+123456789",
        "JobTitle": "Software Engineer",
        "DepartmentName": "IT Department",
        "SectionName": "Development",
        "DepartmentManager": "Jane Smith",
        "EntityName": "Example Corp",
        "DataOwner": "Jane Smith",
        "RequestedDataDescription": "Details of employee project assignments",
        "ReasonForRequest": "Analyze project efficiency",
        "DataClassification": 2,
        "Frequency": 1,
        "Duration": "6 months"
      };

      //var fixedstrinObj = JSON.stringify(jsonObj);
      var dynamicStrinObj = JSON.stringify(data);

      //console.log("fixedStrinObj :", fixedstrinObj);
      console.log("dynamicdata :", data);
      console.log("dynamicStrinObj :", dynamicStrinObj);

    fetch('https://prod-43.westeurope.logic.azure.com:443/workflows/c59409eb6b9945f6a483018428b66101/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9g06xyvmUUAiOPKw89EBUX2A9FoO3RIZZFyiKd-5KhQ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dynamicStrinObj
    })
    .then(response => {
        if (response.ok) {
            console.log("response :", response);
            alert('تم إنشاء المهمة بنجاح.');
        } else {
            alert('Error submitting form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    });
}



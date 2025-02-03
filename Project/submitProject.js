// Function to submit the form data to the specified Power Automate Cloud Flow URL
function submitForm() {
    const form = document.getElementById('dataRequestForm');
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

     data['ConfidentialProjectType'] = parseInt(data['ConfidentialProjectType']);
     data['Priority'] = parseInt(data['Priority']);
     data['ProjectType'] = parseInt(data['ProjectType']);

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

    //   var fixedstrinObj = JSON.stringify(jsonObj);
      var dynamicStrinObj = JSON.stringify(data);

    //   console.log("fixedStrinObj :", fixedstrinObj);
      console.log("dynamicdata :", data);
      console.log("dynamicStrinObj :", dynamicStrinObj);

    fetch('https://prod-31.westeurope.logic.azure.com:443/workflows/c9aa1042e2ca41a69fef0bd72f070365/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iyRiT0kPrZJdnBLQaytsDINk7cmXRdGHrDrk3FU-qXg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dynamicStrinObj
    })
    .then(response => {
        if (response.ok) {
            console.log("response :", response);
            alert('تم تقديم الطلب بنجاح.');
        } else {
            alert('Error submitting form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    });
}



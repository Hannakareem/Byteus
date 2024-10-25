document.getElementById('genderRevealForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        weeks: formData.get('weeks'),
        symptoms: formData.getAll('symptoms'),
        revealMethod: formData.get('revealMethod')
    };

    try {
        const response = await fetch('http://localhost:3000/api/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = 'result.html';
        } else {
            throw new Error('Failed to submit response');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your response. Please try again.');
    }
});
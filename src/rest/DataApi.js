const DATA_ENDPOINT = 'https://crudcrud.com/api/f5fd9eda8abd403f9e078b4e7701b0d2/employees'

class DataApi { 
    get = async () => {
        try {
            const resp = await fetch(DATA_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('get failed!', e);
        }
    }

    update = async(employee) => {
        try {
            let updatedWithoutId = {
                name: employee.name,
                age: employee.age,
                country: employee.country,
                position: employee.position,
                wage: employee.wage
            }
            const resp = await fetch(`${DATA_ENDPOINT}/${employee._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error('update failed:', e);
        }
    }

    put = async (employee) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}/${employee._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            return await resp.json();
        } catch(e) {
            console.log('put failed', e);
        }
    }

    create = async(employee) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            return resp;
        } catch(e) {
            console.log('create failed', e);
        }
    }

    delete = async(_id) => {
        try {
            const resp = await fetch(`${DATA_ENDPOINT}/${_id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.log('delete failed', e);
        }
    }
}

export const dataApi = new DataApi();
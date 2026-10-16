async function loadStudentTable() {
            let studentArr = [
                { id: 1, name: "Nani", age: 28,grade: "A" },
                { id: 2, name: "Siva", age: 30,grade: "B"},
                { id: 3, name: "Teja", age: 26,grade: "A" },
                { id: 4, name: "Ravi", age: 24,grade: "C" },
                { id: 5, name: "Sandy", age: 23, grade: "B" }
            ];
            let studentTableBody = document.getElementById('studentTableBody');
            let rowsHTML = studentArr.map(student => `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                </tr>
            `).join('');
            studentTableBody.innerHTML = rowsHTML;
        }
        loadStudentTable();
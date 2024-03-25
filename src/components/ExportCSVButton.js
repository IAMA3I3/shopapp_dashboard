const ExportCSVButton = ({ data, filename }) => {

    const convertToCSV = (objArray) => {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';

        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (let index in array[i]) {
                if (line !== '') line += ',';

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    };

    const downloadCSV = () => {
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', filename || 'data.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={downloadCSV} className=" bg-primary/80 hover:bg-primary text-white">Export CSV</button>
    )
}

export default ExportCSVButton
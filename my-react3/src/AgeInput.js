
const AgeInput = ({ age, setAge }) => {
    const handleChange = (e) => {

        // Check if the input is a valid number between 1 and 100
        if (!isNaN(e.target.value) && e.target.value >= 1 && e.target.value <= 100) {
          setAge(e.target.value); 
        }
      };

    return (
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={handleChange} />
      </div>
    );
  };

export default AgeInput;
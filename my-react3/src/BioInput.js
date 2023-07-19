
const BioInput = ({ bio, setBio }) => {

    return (
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
    );
};

export default BioInput;
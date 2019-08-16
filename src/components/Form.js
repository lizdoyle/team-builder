import React, {useState} from 'react';


const Form = (props) => {

  console.log(props);

  const [char, setChar] = useState ({id: "", name: "", status: "", species: "", gender: "", origin: "", location: "", created: ""});

  const changeHandler = event => {

    setChar({...char, [event.target.name]: event.target.value});
  }

  const submitForm = event => {
    event.preventDefault();

    const newChar = {
      ...char,
      id: Date.now()

    };

    props.addCharacter(newChar);
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="id"> Character # </label>
      <input
        type="text"
        name="id"
        placeholder="Character ID #"
        value={char.id}
        onChange= {changeHandler}

      />

      <label htmlFor="name"> Legal Name</label>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={char.name}
        onChange= {changeHandler}

      />

    

      <label htmlFor="status"> Status </label>
      <input
        type="text"
        name="status"
        placeholder="Character ID #"
        value={char.status}
        onChange= {changeHandler}

      />

      <label htmlFor="species">Species</label>
      <input
        type="text"
        name="species"
        placeholder="Species"
        value={char.species}
        onChange= {changeHandler}

      />


      <label htmlFor="gender"> Gender</label>
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={char.gender}
        onChange= {changeHandler}

      />


      <label htmlFor="origin"> Origin </label>
      <input
        type="text"
        name="origin"
        placeholder="Origin"
        value={char.id}
        onChange= {changeHandler}

      />


      <label htmlFor="location"> Location</label>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={char.location}
        onChange= {changeHandler}

      />


      <label htmlFor="created"> Date Created</label>
      <input
        type="date"
        name="created"
        placeholder="Created"
        value={char.created}
        onChange= {changeHandler}

      />

      <button type="submit"> Add Character </button>

    </form>
  )
}

export default Form

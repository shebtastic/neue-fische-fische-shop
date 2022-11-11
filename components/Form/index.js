export default function ProductForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name-input'>Name:</label>
      <input id='name-input' type='text' name='name' />
      <label htmlFor='size-input'>Size:</label>
      <input id='size-input' type='text' name='size' />
      <label htmlFor='category-input'>Category:</label>
      <input id='category-input' type='text' name='category' />
      <label htmlFor='difficulty-input'>Difficulty:</label>
      <input id='difficulty-input' type='text' name='difficulty' />
      <label htmlFor='image-input'>Image:</label>
      <input id='image-input' type='text' name='image' />
      <button type='submit'>Submit</button>
    </form>
  );
}

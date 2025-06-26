import React from 'react';

const ShareTip = () => {
    return (
        <div className='p-24'>
            <div className='p-12 text-center'>
                <h1  className='text-6xl mb-2'>Share a Tips</h1>
        
            <p>Garden gives us pleasure and fresh air, so please add a tips from your library</p>
            </div>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Title</label>
  <input type="text" name='title' className="input w-full" placeholder="Tips title" />
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Plant</label>
  <input type="text" name='plant' className="input w-full" placeholder="Plant type" />
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Difficulty level</label>
  <select name="difficulty"className="input w-full">
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

</fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Image</label>
  <input type="text" name='image' className="input w-full" placeholder="Image Url" />
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Description</label>
  <input type="text" name='description' className="input w-full" placeholder="Give a description" />
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Category</label>
  <select name="category" className="input w-full">
          <option value="">Select Category</option>
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          <option value="Balcony Garden">Balcony Garden</option>
        </select>
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Availability</label>
   <select name="availability" className="input w-full">
          <option value="">Select Availability</option>
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Title</label>
  <input type="text" name='title' className="input w-full" placeholder="Tips title" />
</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Title</label>
  <input type="text" name='title' className="input w-full" placeholder="Tips title" />
</fieldset>
                </div>
            </form>
        </div>
        
    );
};

export default ShareTip;
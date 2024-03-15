import { useState } from "react";
import { Button } from "./App";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newImage = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newImage);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <div>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👩🏼‍🤝‍👩🏻 Friend name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🌆 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </div>
  );
}

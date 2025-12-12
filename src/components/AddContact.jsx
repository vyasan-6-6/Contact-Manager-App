import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    if (!name.trim() || !email.trim()) {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addContactHandler({
      name: name.trim(),
      email: email.trim(),
    });
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Add Contact
        </h1>

        <form onSubmit={this.add} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;

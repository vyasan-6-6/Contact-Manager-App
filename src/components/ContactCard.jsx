import user from "../images/useravatar.png";

const ContactCard = ({ contact, onDelete }) => {
  if (!contact) return null;

  const { id, name, email } = contact;

  return (
    <div
      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition"
      key={id}
    >
      <img
        src={user}
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600 text-sm">{email}</span>
      </div>

      <button
        className="ml-auto text-red-500 hover:text-red-600"
        onClick={() => onDelete && onDelete(id)}
      >
        <i className="trash alternate outline icon"></i>
      </button>
    </div>
  );
};

export default ContactCard;

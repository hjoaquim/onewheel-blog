import { Link } from "@remix-run/react";

export default function AdminIndex() {
    return (
        <div>
            <p>
                <Link to="new" className="text-blue-600 underline">
                    Create a New Post
                </Link>
            </p>
            <p>
                <Link to="edit" className="text-blue-600 underline">
                    Edit an Existing Post
                </Link>
            </p>
        </div>
    );
}

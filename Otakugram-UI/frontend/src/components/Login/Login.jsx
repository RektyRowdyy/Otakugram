import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Login() { 
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500">Or continue with</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <button className="flex items-center px-4 py-2 border rounded-lg focus:outline-none hover:bg-gray-100">
                        <FaGoogle size={25}></FaGoogle>
                    </button>
                    <button className="flex items-center px-4 py-2 border rounded-lg focus:outline-none hover:bg-gray-100">
                        <FaDiscord size={25}></FaDiscord>
                    </button>
                    <button className="flex items-center px-4 py-2 border rounded-lg focus:outline-none hover:bg-gray-100">
                        <FaFacebook size={25}></FaFacebook>
                    </button>
                    <button className="flex items-center px-4 py-2 border rounded-lg focus:outline-none hover:bg-gray-100">
                        <FaSquareXTwitter size={25}></FaSquareXTwitter>
                    </button>
                </div>
            </div>
        </div>
    );

}
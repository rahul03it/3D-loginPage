import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  // const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Buttons positioned above the model */}
      <div className="absolute w-[70%] flex justify-evenly item-center gap-10 top-80">
        
        <div className="group relative">
          <button
            className="relative overflow-hidden px-8 py-3 text-lg font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 border border-blue-500 rounded-md shadow-[0_4px_15px_rgba(0,0,255,0.4)] transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-500 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(0,150,255,0.8)] hover:-translate-y-1 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-50"
            // onClick={() => navigate("/agent-login")} // Navigate to Agent Login
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></span>
            <span className="relative z-10">Agent Login</span>
          </button>
        </div>

        <button
          className="relative overflow-hidden px-8 py-3 text-lg font-bold uppercase tracking-wider text-white bg-gradient-to-r from-green-700 via-lime-600 to-emerald-700 border border-green-500 rounded-md shadow-[0_4px_15px_rgba(0,255,100,0.4)] transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-emerald-700 hover:via-green-500 hover:to-lime-500 hover:shadow-[0_0_30px_rgba(0,255,150,0.8)] hover:-translate-y-1 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-green-500 before:to-lime-500 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-50"
          // onClick={() => navigate("/admin-login")} // Navigate to Admin Login
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-500 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></span>
          <span className="relative z-10">Admin Login</span>
        </button>
      </div>

      {/* Fullscreen Canvas */}
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="w-full h-full">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

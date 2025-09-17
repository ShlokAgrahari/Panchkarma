import React, { useEffect, useState } from "react";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";



const MeetingSetup = ({ setisSetupComplete }) => {
  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("Something went wrong with call component");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-amber-600">
      <h1 className="text-3xl font-bold">Meeting setup</h1>

      <VideoPreview />

      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setisMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>

      <div className="bg-blue-500 p-2 rounded-[5px]">
        <button
          className="text-white text-xl"
          onClick={() => {
            call.join();
            setisSetupComplete(true);
          }}
        >
          Join meeting
        </button>
      </div>
    </div>
  );
};

export default MeetingSetup;

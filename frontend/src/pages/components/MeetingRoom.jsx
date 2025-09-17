import React, { useEffect, useState } from "react";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // keep if you have shadcn/ui in React
import { LayoutList } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import EndCallButton from "./ui/EndCallButton";
import Loader from "./ui/Loader";



const MeetingRoom = ({ teamId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // check if `?personal=true` exists in the URL
  const searchParams = new URLSearchParams(location.search);
  const isPersonalRoom = searchParams.has("personal");

  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const call = useCall();

  // Set meeting active when entering personal room
  useEffect(() => {
    const setMeeting = async () => {
      if (isPersonalRoom) {
        try {
          await axios.post("/api/setMeeting", {
            team_id: teamId,
          });
        } catch (error) {
          console.error("Error setting meeting:", error);
        }
      }
    };
    setMeeting();
  }, [isPersonalRoom, teamId]);

  // Handle closing personal meeting on tab close/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isPersonalRoom) {
        try {
          const payload = JSON.stringify({ isActive: false });
          const blob = new Blob([payload], { type: "application/json" });
          navigator.sendBeacon("/api/setMeeting", blob);
        } catch (error) {
          console.error("Beacon error:", error);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPersonalRoom]);

  if (callingState !== CallingState.JOINED) {
    return <Loader />;
  }

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 bg-gray-900 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={`h-[calc(100vh-86px)] hidden ml-2 ${
            showParticipants ? "show-block" : ""
          }`}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className="fixed bottom-0 flex flex-row w-full items-center justify-center gap-5 flex-wrap z-50">
        <div>
          {CallControls ? (
            <CallControls onLeave={() => navigate("/dashboard")} />
          ) : (
            <p className="text-white">CallControls not found</p>
          )}
        </div>

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c533b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-gray-950 bg-gray-900 text-white">
            {["grid", "speaker-left", "speaker-right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setLayout(item)}
                >
                  {item}
                </DropdownMenuItem>
              </div>
            ))}
            <DropdownMenuSeparator className="border-black" />
          </DropdownMenuContent>
        </DropdownMenu>

        {isPersonalRoom && <EndCallButton team_id={teamId} />}
      </div>
    </section>
  );
};

export default MeetingRoom;

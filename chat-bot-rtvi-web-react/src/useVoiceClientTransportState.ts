import { TransportState, VoiceEvent } from "chat-bot-rtvi-client";
import { useVoiceClientEvent } from "./useVoiceClientEvent";
import { atom, useAtom } from "jotai";

const transportStateAtom = atom<TransportState>("idle");

export const useVoiceClientTransportState = () => {
  const [transportState, setTransportState] = useAtom(transportStateAtom);

  useVoiceClientEvent(VoiceEvent.TransportStateChanged, setTransportState);

  return transportState;
};

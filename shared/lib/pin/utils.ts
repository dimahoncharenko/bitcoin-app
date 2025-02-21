import * as SecureStore from "expo-secure-store";

class PinService {
  async savePin(pin: string): Promise<void> {
    await SecureStore.setItemAsync("pin", pin);
  }

  async getPin(): Promise<string | null> {
    return await SecureStore.getItemAsync("pin");
  }
}

export const pinService = new PinService();

export const checkIsTherePin = async () => {
  return await !!pinService.getPin();
};

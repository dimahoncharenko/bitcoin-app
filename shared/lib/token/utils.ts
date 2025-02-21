import * as SecureStore from "expo-secure-store";

class TokenService {
  async saveToken(token: string): Promise<void> {
    await SecureStore.setItemAsync("accessToken", token);
  }

  async getToken(): Promise<string | null> {
    return await SecureStore.getItemAsync("accessToken");
  }

  async deleteToken(): Promise<void> {
    await SecureStore.deleteItemAsync("accessToken");
  }
}

export const checkIfAuthorized = async () => !!(await tokenService.getToken());

export const tokenService = new TokenService();

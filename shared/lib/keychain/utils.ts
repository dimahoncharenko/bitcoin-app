import * as Keychain from "react-native-keychain";

class TokenService {
  async saveToken(token: string): Promise<void> {
    await Keychain.setGenericPassword("accessToken", token);
  }

  async getToken(): Promise<string | null> {
    const credentials = await Keychain.getGenericPassword();

    return credentials ? credentials.password : null;
  }

  async deleteToken(): Promise<void> {
    await Keychain.resetGenericPassword();
  }
}

export const tokenService = new TokenService();

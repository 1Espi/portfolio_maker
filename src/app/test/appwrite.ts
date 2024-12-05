import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("674ff742003be3d94673"); // Your project ID

const account = new Account(client);

// Go to OAuth provider login page
account.createOAuth2Session(
  OAuthProvider.Google, // provider
  "https://portfolio-maker-pi.vercel.app/", // redirect here on success
  "https://portfolio-maker-pi.vercel.app/failed", // redirect here on failure
);

import { User, DonationCenter, Donation, Volunteer } from "@/types/models";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: Partial<User>): Promise<{ user: User; token: string }> {
    return this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  // Centers endpoints
  async getCenters(): Promise<DonationCenter[]> {
    return this.request("/centers");
  }

  async getCenterById(id: string): Promise<DonationCenter> {
    return this.request(`/centers/${id}`);
  }

  // Donations endpoints
  async createDonation(donationData: Partial<Donation>): Promise<Donation> {
    return this.request("/donations", {
      method: "POST",
      body: JSON.stringify(donationData),
    });
  }

  async getDonationsByUser(userId: string): Promise<Donation[]> {
    return this.request(`/donations/user/${userId}`);
  }

  // Volunteer endpoints
  async registerVolunteer(volunteerData: Partial<Volunteer>): Promise<Volunteer> {
    return this.request("/volunteers", {
      method: "POST",
      body: JSON.stringify(volunteerData),
    });
  }

  async getVolunteerStatus(userId: string): Promise<Volunteer> {
    return this.request(`/volunteers/${userId}`);
  }
}

export const apiClient = new ApiClient();
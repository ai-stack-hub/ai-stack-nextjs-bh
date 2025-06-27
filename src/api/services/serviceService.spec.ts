import { ServiceService } from "./serviceService";

describe("ServiceService", () => {
  let svc: ServiceService;
  beforeEach(() => {
    svc = new ServiceService();
  });

  it("gets all services", async () => {
    const services = await svc.getAllServices();
    expect(Array.isArray(services)).toBe(true);
  });

  it("gets service groups", async () => {
    const groups = await svc.getServiceGroups();
    expect(Array.isArray(groups)).toBe(true);
  });

  it("gets services by provider", async () => {
    const groups = await svc.getServiceGroups();
    const provider = groups[0]?.provider;
    if (provider) {
      const services = await svc.getServicesByProvider(provider);
      expect(Array.isArray(services)).toBe(true);
    }
  });

  it("gets service by id", async () => {
    const services = await svc.getAllServices();
    if (services.length) {
      const service = await svc.getServiceById(services[0].id);
      expect(service).toBeTruthy();
    }
  });

  it("returns null for missing service by id", async () => {
    const service = await svc.getServiceById("not-found");
    expect(service).toBeNull();
  });

  it("updates service status", async () => {
    const services = await svc.getAllServices();
    if (services.length) {
      const updated = await svc.updateServiceStatus(services[0].id, "inactive");
      expect(updated.status).toBe("inactive");
    }
  });

  it("returns null for updateServiceStatus with bad id", async () => {
    const updated = await svc.updateServiceStatus("bad-id", "inactive");
    expect(updated).toBeNull();
  });

  it("adds and removes a service", async () => {
    const group = (await svc.getServiceGroups())[0];
    const newService = await svc.addService(group.provider, {
      name: "TestService",
      description: "TestService",
      status: "active",
      icon: "Mail",
    });
    expect(newService.name).toBe("TestService");
    const removed = await svc.removeService(newService.id);
    expect(removed).toBe(true);
  });

  it("removes non-existent service returns false", async () => {
    const removed = await svc.removeService("bad-id");
    expect(removed).toBe(false);
  });

  it("gets services by status", async () => {
    const services = await svc.getServicesByStatus("active");
    expect(Array.isArray(services)).toBe(true);
  });

  it("searches services", async () => {
    const services = await svc.searchServices("service");
    expect(Array.isArray(services)).toBe(true);
  });

  it("refreshes service statuses", async () => {
    await expect(svc.refreshServiceStatuses()).resolves.toBeUndefined();
  });
});

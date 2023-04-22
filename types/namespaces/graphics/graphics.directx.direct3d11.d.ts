  export class Direct3DMultisampleDescription {
    count: number;
    quality: number;
    constructor();
  }

  export class Direct3DSurfaceDescription {
    width: number;
    height: number;
    format: number;
    multisampleDescription: Direct3DMultisampleDescription;
    constructor();
  }

  export enum Direct3DUsage {
    default,
    immutable,
    dynamic,
    staging,
  }

  export enum Direct3DBindings {
    vertexBuffer,
    indexBuffer,
    constantBuffer,
    shaderResource,
    streamOutput,
    renderTarget,
    depthStencil,
    unorderedAccess,
    decoder,
    videoEncoder,
  }

  export class IDirect3DDevice {
    constructor();

    trim(): void;

  }

  export class IDirect3DSurface {
    description: Direct3DSurfaceDescription;
    constructor();

  }


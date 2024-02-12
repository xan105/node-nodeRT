  export class Direct3DMultisampleDescription {
    count: Number;
    quality: Number;
    constructor();
  }

  export class Direct3DSurfaceDescription {
    width: Number;
    height: Number;
    format: Number;
    multisampleDescription: Direct3DMultisampleDescription;
    constructor();
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

  export enum Direct3DUsage {
    default,
    immutable,
    dynamic,
    staging,
  }

  export class IDirect3DDevice {
    constructor();

    trim(): void;

  }

  export class IDirect3DSurface {
    description: Direct3DSurfaceDescription;
    constructor();

  }


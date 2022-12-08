export class FileSystem {
  private path: Directory;

  constructor() {
    this.path = new Directory("/");
  }

  public cd(dir: string): void {
    this.path = dir === ".." ? this.path.parent : this.path.getDirectory(dir);
  }

  public cdToRoot(): void {
    while (this.path.parent) {
      this.cd("..");
    }
  }

  public dir(dir: string): void {
    this.path.addDirectory(dir);
  }

  public file(name: string, size: number): void {
    this.path.addFile(name, size);
  }

  public getSize(): number {
    return this.path.getSize();
  }

  public getAllDirectories(): Directory[] {
    return this.path.getAllDirectories();
  }
}

class Directory {
  public name: string;
  public parent: Directory;
  public directories: Directory[];
  public files: File[];

  constructor(name: string, parent?: Directory) {
    this.name = name;
    this.parent = parent;
    this.directories = [];
    this.files = [];
  }

  public getDirectory(name: string): Directory {
    const directory = this.directories.find((dir) => dir.name === name);
    if (directory) {
      return directory;
    }
  }

  public getAllDirectories = (): Directory[] => {
    return this.directories.reduce(
      (acc, dir) => [...acc, dir, ...dir.getAllDirectories()],
      []
    );
  };

  public addDirectory(name: string): void {
    const newDirectory = new Directory(name, this);
    this.directories.push(newDirectory);
  }

  public addFile(name: string, size: number): void {
    const newFile = new File(name, size);
    this.files.push(newFile);
  }

  public getSize(): number {
    return (
      this.files.reduce((acc, file) => acc + file.size, 0) +
      this.directories.reduce((acc, dir) => acc + dir.getSize(), 0)
    );
  }
}

class File {
  public name: string;
  public size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

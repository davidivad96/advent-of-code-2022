export class FileSystem {
  private path: Directory;

  constructor() {
    this.path = new Directory("/");
  }

  cd(dir: string): void {
    this.path = dir === ".." ? this.path.parent : this.path.getDirectory(dir);
  }

  cdToRoot(): void {
    while (this.path.parent) {
      this.cd("..");
    }
  }

  dir(dir: string): void {
    this.path.addDirectory(dir);
  }

  file(name: string, size: number): void {
    this.path.addFile(name, size);
  }

  getSize(): number {
    return this.path.getSize();
  }

  getAllDirectories(): Directory[] {
    return this.path.getAllDirectories();
  }
}

class Directory {
  name: string;
  parent: Directory;
  directories: Directory[];
  files: File[];

  constructor(name: string, parent?: Directory) {
    this.name = name;
    this.parent = parent;
    this.directories = [];
    this.files = [];
  }

  getDirectory(name: string): Directory {
    const directory = this.directories.find((dir) => dir.name === name);
    if (directory) {
      return directory;
    }
  }

  getAllDirectories = (): Directory[] => {
    return this.directories.reduce(
      (acc, dir) => [...acc, dir, ...dir.getAllDirectories()],
      []
    );
  };

  addDirectory(name: string): void {
    const newDirectory = new Directory(name, this);
    this.directories.push(newDirectory);
  }

  addFile(name: string, size: number): void {
    const newFile = new File(name, size);
    this.files.push(newFile);
  }

  getSize(): number {
    return (
      this.files.reduce((acc, file) => acc + file.size, 0) +
      this.directories.reduce((acc, dir) => acc + dir.getSize(), 0)
    );
  }
}

class File {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

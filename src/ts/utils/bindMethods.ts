export default function bindMethods<T = ThisType<ClassDecorator>>(
    classToBind: T
) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(classToBind))
        .filter(
            (key) =>
                key !== "constructor" &&
                classToBind[key as keyof T] instanceof Function
        )
        .forEach((key) => {
            const current = classToBind[key as keyof T];

            if (current instanceof Function) {
                classToBind[key as keyof T] = current.bind(classToBind);
            }
        });
}

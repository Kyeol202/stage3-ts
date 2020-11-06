abstract class AutoIdEntity {
    //
    abstract getId(): string;
    abstract getIdFormat(): string;
    abstract setAutoId(autoId: string): void



}
export default AutoIdEntity;
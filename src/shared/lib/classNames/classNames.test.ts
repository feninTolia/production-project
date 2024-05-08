import { classNames } from '../classNames';

describe('classNames', () => {
  it('should return root class', () => {
    expect(classNames('rootClass')).toBe('rootClass');
  });

  it('should return root class with additional', () => {
    const expected = 'rootClass class1 class2';
    expect(classNames('rootClass', {}, ['class1 class2'])).toBe(expected);
  });

  it('should return root class without additional undefined', () => {
    const expected = 'rootClass';
    expect(classNames('rootClass', {}, [undefined])).toBe(expected);
  });

  it('should return root class with additional and mods', () => {
    const expected = 'rootClass hoverable focusable class1 class2';
    expect(
      classNames('rootClass', { hoverable: true, focusable: true }, [
        'class1 class2',
      ])
    ).toBe(expected);
  });

  it('should return root class with mods false', () => {
    const expected = 'rootClass hoverable class1 class2';
    expect(
      classNames('rootClass', { hoverable: true, focusable: false }, [
        'class1 class2',
      ])
    ).toBe(expected);
  });

  it('should return root class with mods undefined', () => {
    const expected = 'rootClass hoverable class1 class2';
    expect(
      classNames('rootClass', { hoverable: true, focusable: undefined }, [
        'class1 class2',
      ])
    ).toBe(expected);
  });
});

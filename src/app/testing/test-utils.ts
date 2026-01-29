// Jest utilities for Angular testing
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

export class TestUtils {
  /**
   * Helper to query element by CSS selector
   */
  static querySelector<T>(fixture: ComponentFixture<T>, selector: string): HTMLElement | null {
    const debugElement: DebugElement = fixture.debugElement;
    const nativeElement = debugElement.nativeElement;
    return nativeElement.querySelector(selector);
  }

  /**
   * Helper to query all elements by CSS selector
   */
  static querySelectorAll<T>(fixture: ComponentFixture<T>, selector: string): NodeListOf<HTMLElement> {
    const debugElement: DebugElement = fixture.debugElement;
    const nativeElement = debugElement.nativeElement;
    return nativeElement.querySelectorAll(selector);
  }

  /**
   * Helper to get component text content
   */
  static getTextContent<T>(fixture: ComponentFixture<T>, selector: string): string {
    const element = this.querySelector(fixture, selector);
    return element?.textContent?.trim() || '';
  }

  /**
   * Helper to trigger events on elements
   */
  static triggerEvent<T>(fixture: ComponentFixture<T>, selector: string, eventType: string): void {
    const element = this.querySelector(fixture, selector);
    if (element) {
      element.dispatchEvent(new Event(eventType));
      fixture.detectChanges();
    }
  }
}
